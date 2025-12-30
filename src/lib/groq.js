const GROQ_API_KEY = "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"; // In production, use import.meta.env
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const generateAssessment = async (topic) => {
    const prompt = `You are a technical interviewer. Generate 3 multiple-choice assessment questions for the topic: "${topic}". 
  Difficulty: Beginner to Intermediate. 
  
  Return ONLY a raw JSON array (no markdown code blocks, just the JSON) with this exact schema for each question:
  [
    {
      "question": "Question text here",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0 // 0-3
    }
  ]`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.5,
                max_tokens: 1024
            })
        });

        const data = await response.json();
        const content = data.choices[0].message.content;

        // Clean up potential markdown wrapper
        const jsonStr = content.replace(/```json/g, "").replace(/```/g, "").trim();
        return JSON.parse(jsonStr);
    } catch (error) {
        console.error("Groq Quiz Error:", error);
        // Fallback Mock Quiz if API Fails
        return [
            {
                question: `What is a core concept of ${topic}?`,
                options: ["Concept A", "Concept B", "Concept C", "Concept D"],
                correctIndex: 0
            }
        ];
    }
};

export const generateRoadmap = async (topic, score, maxScore, userContext = "") => {
    const level = score === maxScore ? "Advanced" : score > 0 ? "Intermediate" : "Beginner";

    const prompt = `You are a Senior Technical Mentor. Create a personalized, markdown-formatted learning roadmap for "${topic}".
  
  Student Context:
  - Assessment Score: ${score}/${maxScore} (${level} Level)
  - Specific Interests: ${userContext || "General Mastery"}
  
  Format the response in structured Markdown:
  # Personalized Roadmap: ${topic}
  **Estimated Duration**: [Time in Weeks] | **Level**: ${level}
  
  ## 🎯 Executive Summary
  Brief motivation and what to expect.
  
  ## 🗓️ Learning Path
  ### Week 1-2: Foundations
  - Topic A
  - Topic B
  
  ### Week 3-4: Advanced Concepts
  ...
  
  ## 🛠️ Recommended Projects
  1. **Project A**: Description
  2. **Project B**: Description
  
  ## 📚 Resources
  - Official Docs
  - Community Links
  
  Tone: Encouraging, professional, and actionable. Do not include any preamble, just the markdown.`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7,
                max_tokens: 2048
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Groq Roadmap Error:", error);
        return "## Error\nCould not generate roadmap at this time. Please try again.";
    }
};
