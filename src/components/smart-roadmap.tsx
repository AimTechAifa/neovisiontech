"use client";

import { useEffect, useState } from "react";
import { Brain, CheckCircle2, ChevronRight, Download, Loader2, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Badge, Button } from "@/components/ui";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

export default function SmartRoadmap({ topic }: { topic: string; category?: string }) {
  const [status, setStatus] = useState<"idle" | "loading_quiz" | "quiz" | "analyzing" | "complete">("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [roadmap, setRoadmap] = useState("");

  const startAssessment = async () => {
    setStatus("loading_quiz");
    const response = await fetch("/api/ai/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });
    const data = (await response.json()) as { ok?: boolean; questions?: Question[]; error?: string };
    if (!response.ok || !data.questions?.length) {
      setStatus("idle");
      toast.error(data.error ?? "Could not generate quiz. Please try again.");
      return;
    }
    setQuestions(data.questions);
    setCurrentQuestion(0);
    setAnswers({});
    setStatus("quiz");
  };

  const finishQuiz = async (nextAnswers: Record<number, number>) => {
    const calculatedScore = questions.reduce((total, question, index) => (
      nextAnswers[index] === question.correctIndex ? total + 1 : total
    ), 0);
    setScore(calculatedScore);
    setStatus("analyzing");
    const response = await fetch("/api/ai/roadmap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, score: calculatedScore, maxScore: questions.length }),
    });
    const data = (await response.json()) as { ok?: boolean; markdown?: string; error?: string };
    if (!response.ok || !data.markdown) {
      setStatus("quiz");
      toast.error(data.error ?? "Could not generate a roadmap. Please try again.");
      return;
    }
    setRoadmap(data.markdown);
    setStatus("complete");
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((value) => value + 1);
      return;
    }
    void finishQuiz(answers);
  };

  const downloadPDF = async () => {
    const element = document.getElementById("roadmap-content");
    if (!element) return;
    const html2pdf = (await import("html2pdf.js")).default;
    await html2pdf().set({
      margin: 0.5,
      filename: `${topic.replace(/\s+/g, "_")}_NeoVision_Roadmap.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).from(element).save();
  };

  const reset = () => {
    setStatus("idle");
    setQuestions([]);
    setCurrentQuestion(0);
    setAnswers({});
    setRoadmap("");
  };

  if (status === "idle") {
    return (
      <div className="bg-linear-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <Badge variant="outline" className="border-indigo-400 text-indigo-200 mb-4">AI Powered</Badge>
          <h2 className="text-2xl font-bold mb-4">Get Your Personalized Roadmap</h2>
          <p className="text-blue-100 mb-8 max-w-md">
            Not sure where to start? Take a quick 3-question assessment and let our AI build a custom learning path tailored to your current skill level.
          </p>
          <Button onClick={startAssessment} className="bg-white text-blue-900 hover:bg-blue-50 font-bold border-none h-12 px-8" icon={<Brain className="w-5 h-5 mr-2" />}>
            Generate My Roadmap
          </Button>
        </div>
      </div>
    );
  }

  if (status === "loading_quiz" || status === "analyzing") {
    return (
      <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 min-h-[300px] flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" aria-hidden="true" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {status === "loading_quiz" ? "Generating Assessment..." : "Building Your Roadmap..."}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">Powered by Llama 3.3 70B</p>
      </div>
    );
  }

  if (status === "quiz") {
    const question = questions[currentQuestion];
    if (!question) return null;
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <Badge variant="blue">Question {currentQuestion + 1}/{questions.length}</Badge>
          <span className="text-sm text-slate-500">Assessment</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{question.question}</h2>
        <div className="space-y-3 mb-8" role="radiogroup" aria-label={question.question}>
          {question.options.map((option, idx) => {
            const selected = answers[currentQuestion] === idx;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setAnswers((prev) => ({ ...prev, [currentQuestion]: idx }))}
                aria-pressed={selected}
                className={`w-full text-left p-4 rounded-xl border transition-all ${selected ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-400 shadow-md" : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-300"}`}
              >
                <span className="text-slate-700 dark:text-slate-300 font-medium">{option}</span>
              </button>
            );
          })}
        </div>
        <div className="flex justify-end">
          <Button onClick={nextQuestion} disabled={answers[currentQuestion] === undefined} className="bg-blue-600 text-white hover:bg-blue-700" icon={<ChevronRight className="w-4 h-4" />}>
            {currentQuestion === questions.length - 1 ? "Finish Assessment" : "Next Question"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <RoadmapResult topic={topic} score={score} total={questions.length} markdown={roadmap} onReset={reset} onDownload={downloadPDF} />
  );
}

function RoadmapResult({
  score,
  total,
  markdown,
  onReset,
  onDownload,
}: {
  topic: string;
  score: number;
  total: number;
  markdown: string;
  onReset: () => void;
  onDownload: () => void;
}) {
  const [Markdown, setMarkdown] = useState<typeof import("react-markdown").default | null>(null);
  useEffect(() => {
    let active = true;
    void import("react-markdown").then((mod) => {
      if (active) setMarkdown(() => mod.default);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" aria-hidden="true" />
            Your Personalized Roadmap
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Assessment Score: <span className="font-semibold text-slate-900 dark:text-white">{score}/{total}</span>
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={onReset} icon={<RefreshCw className="w-4 h-4" />}>Retake</Button>
          <Button variant="primary" size="sm" onClick={onDownload} icon={<Download className="w-4 h-4" />}>Download PDF</Button>
        </div>
      </div>
      <div id="roadmap-content" className="p-8 prose dark:prose-invert max-w-none">
        {Markdown ? <Markdown>{markdown}</Markdown> : <p className="whitespace-pre-wrap">{markdown}</p>}
      </div>
    </div>
  );
}
