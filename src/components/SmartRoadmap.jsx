import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import html2pdf from "html2pdf.js";
import { generateAssessment, generateRoadmap } from "../lib/groq";
import { Button, Badge } from "./ui"; // Assuming Badge is exported from ui
import { Brain, CheckCircle2, Download, RefreshCw, Loader2, ChevronRight } from "lucide-react";

export default function SmartRoadmap({ topic, category }) {
    const [status, setStatus] = useState("idle"); // idle, loading_quiz, quiz, analyzing, complete
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({}); // { 0: 1, 1: 0, ... }
    const [score, setScore] = useState(0);
    const [roadmap, setRoadmap] = useState("");

    const startAssessment = async () => {
        setStatus("loading_quiz");
        const quiz = await generateAssessment(topic);
        if (quiz && quiz.length > 0) {
            setQuestions(quiz);
            setStatus("quiz");
        } else {
            // Fallback or error state
            setStatus("idle");
            alert("Could not generate quiz. Please try again.");
        }
    };

    const handleAnswer = (optionIndex) => {
        setAnswers(prev => ({ ...prev, [currentQuestion]: optionIndex }));
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = async () => {
        // Calculate Score
        let calculatedScore = 0;
        questions.forEach((q, idx) => {
            if (answers[idx] === q.correctIndex) calculatedScore++;
        });
        setScore(calculatedScore);

        setStatus("analyzing");
        const markdown = await generateRoadmap(topic, calculatedScore, questions.length);
        setRoadmap(markdown);
        setStatus("complete");
    };

    const downloadPDF = async () => {
        const element = document.getElementById("roadmap-content");

        // Store original styles
        const originalBg = element.style.backgroundColor;
        const originalColor = element.style.color;
        const originalPadding = element.style.padding;

        // Temporarily apply print-friendly styles directly to the element
        element.style.backgroundColor = "#ffffff";
        element.style.color = "#1e293b";
        element.style.padding = "40px";

        // Force all child elements to have dark text
        const allElements = element.querySelectorAll("*");
        const originalStyles = [];
        allElements.forEach((el, i) => {
            originalStyles[i] = el.style.color;
            el.style.color = "#1e293b";
        });

        try {
            const opt = {
                margin: 0.5,
                filename: `${topic.replace(/\s+/g, "_")}_NeoVision_Roadmap.pdf`,
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: "#ffffff"
                },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
            };

            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error("PDF Export Error:", error);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            // Restore original styles
            element.style.backgroundColor = originalBg;
            element.style.color = originalColor;
            element.style.padding = originalPadding;
            allElements.forEach((el, i) => {
                el.style.color = originalStyles[i] || "";
            });
        }
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
                {/* Decorative BG */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                    <Badge variant="outline" className="border-indigo-400 text-indigo-200 mb-4">
                        AI Powered
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">Get Your Personalized Roadmap</h2>
                    <p className="text-blue-100 mb-8 max-w-md">
                        Not sure where to start? Take a quick 3-question assessment and let our AI build a custom learning path tailored to your current skill level.
                    </p>
                    <Button
                        onClick={startAssessment}
                        className="bg-white text-blue-900 hover:bg-blue-50 font-bold border-none h-12 px-8"
                        icon={<Brain className="w-5 h-5 mr-2" />}
                    >
                        Generate My Roadmap
                    </Button>
                </div>
            </div>
        );
    }

    if (status === "loading_quiz" || status === "analyzing") {
        return (
            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 min-h-[300px] flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {status === "loading_quiz" ? "Generating Assessment..." : "Building Your Roadmap..."}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                    Powered by Llama3-70b
                </p>
            </div>
        );
    }

    if (status === "quiz") {
        const question = questions[currentQuestion];
        return (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <Badge variant="blue">Question {currentQuestion + 1}/{questions.length}</Badge>
                    <span className="text-sm text-slate-500">Assessment</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    {question.question}
                </h3>

                <div className="space-y-3 mb-8">
                    {question.options.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${answers[currentQuestion] === idx
                                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-400 shadow-md"
                                : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-300"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${answers[currentQuestion] === idx ? "border-blue-600 bg-blue-600" : "border-slate-400"
                                    }`}>
                                    {answers[currentQuestion] === idx && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <span className="text-slate-700 dark:text-slate-300 font-medium">{option}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end">
                    <Button
                        onClick={nextQuestion}
                        disabled={answers[currentQuestion] === undefined}
                        className="bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        icon={<ChevronRight className="w-4 h-4" />}
                        iconPosition="right"
                    >
                        {currentQuestion === questions.length - 1 ? "Finish Assessment" : "Next Question"}
                    </Button>
                </div>
            </div>
        );
    }

    if (status === "complete") {
        return (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                            Your Personalized Roadmap
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Assessment Score: <span className="font-semibold text-slate-900 dark:text-white">{score}/{questions.length}</span>
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" size="sm" onClick={reset} icon={<RefreshCw className="w-4 h-4" />}>
                            Retake
                        </Button>
                        <Button variant="primary" size="sm" onClick={downloadPDF} icon={<Download className="w-4 h-4" />}>
                            Download PDF
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div id="roadmap-content" className="p-8 prose dark:prose-invert max-w-none">
                    <ReactMarkdown>
                        {roadmap}
                    </ReactMarkdown>
                </div>
            </div>
        );
    }

    return null;
}
