import { useEffect, useState } from "react";
import WordEditor from "./WordEditor";
import { Choice } from "../../../type";
import MultipleChoiceQuestionEditor from "./MultipleChoiceQuestionEditor";
import TrueFalse from "./TrueFalseQuiz";


export default function Quizzes() {
        const [title, setTitle] = useState<string>('Is 2 + 2 = 4?');
        const [points, setPoints] = useState<number>(3);
        const [text, setText] = useState<string>("");
        const [question, setQuestion] = useState<string>('Is it true that 2 + 2 = 4?');
        const [content, setContent] = useState<string>("Is it true that 2 + 2 = 4?")
        const [answer, setAnswer] = useState<"True" | "False" | null>('True');

        const saveQuestion = () => {
                alert("Question saved")
        }
        const cancelChanges = () => {
                setTitle("");
                setPoints(0);
                setQuestion("");
                setAnswer(null);
        }
        const [choices, setChoices] = useState<Choice[]>([
                { text: "4", isCorrect: false },
                { text: "3", isCorrect: false },
                { text: "5", isCorrect: true },
                { text: "7", isCorrect: false },
        ]

        );
        const [component, setComponent] = useState("mtchoice");
        useEffect(() => {
                if (component === "mtchoice") {
                        setContent("How much is 2 + 2?")
                        setTitle("Easy Question");
                        setText(" Enter your question and multiple answers, then select the one correct answer.");

                }
                else {
                        setTitle("is 2 + 2 = 4?")
                        setContent("is it true that 2 + 2 = 4?");
                        setText(" Enter your question text, then select if True or False is the correct answer.");


                }
        }, [component]);
        const addChoice = () => {
                setChoices([...choices, { text: "", isCorrect: false }]);
        };
        const updateChoice = (index: number, text: string, isCorrect: boolean) => {
                const updatedChoices = choices.map((choice, i) =>
                        i === index
                                ? { ...choice, text, isCorrect }
                                : { ...choice, text, isCorrect: isCorrect ? false : choice.isCorrect }
                );
                setChoices(updatedChoices);
        };
        const removeChoice = (index: number) => {
                setChoices(choices.filter((_, i) => i !== index));
        };


        return <div className="container my-4 p-4 border rounded shadow-sm">

                <div className="d-flex justify-content-between align-items-center mb-3">
                        <input
                                type="text"
                                className="form-control w-50 me-3"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        <select onChange={(event) => setComponent(event.target.value)}
                                className="form-select w-25 me-3">
                                <option value="mtchoice">Multiple Choice</option>
                                <option value="tfchoice">True/False</option>

                        </select>
                        <label>pts:</label>
                        <input
                                type="number"
                                className="form-control w-25"
                                value={points}
                                onChange={(e) => setPoints(Number(e.target.value))} />
                </div>

                <p>
                        {text}
                </p>

                <label className="form-label fw-bold">Question:</label>
                <WordEditor content={content} setContent={setContent} />
                <div className="mb-3">
                        <label className="form-label fw-bold">Answers:</label>
                        {component === "mtchoice" ?
                                <MultipleChoiceQuestionEditor
                                        choices={choices}
                                        updateChoice={updateChoice}
                                        removeChoice={removeChoice} /> : <TrueFalse />
                        }
                </div>
                <div className="d-flex justify-content-end">
                        <button className="btn btn-link text-danger position-relatve"
                                style={{ right: 0 }}
                                onClick={addChoice}>
                                + Add Another Answer
                        </button>
                </div>
                <div className="d-flex justify-content-start">
                        <button className="btn btn-secondary me-2"

                                onClick={cancelChanges}>
                                Cancel
                        </button>
                        <button className="btn btn-danger "

                                onClick={saveQuestion}>
                                Update Question
                        </button>
                </div>
        </div>
}