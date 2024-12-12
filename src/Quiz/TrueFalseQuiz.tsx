import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";
type TrueFlaseProps = {

}
export default function TrueFalse() {
    const [answer, setAnswer] = useState<"True" | "False" | null>('True');


    return <>
        <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
                <ImArrowRight
                    size={40}
                    className={`me-2 ${answer === "True" ? "visible" : "invisible"}`}
                    color="#90c470"
                    style={{ filter: "drop-shadow(1px 1px 2px gray)" }}
                />
                <button className={`btn me-2 ${answer === "True" ? "btn-success" : "btn-outline-secondary"}`}
                    onClick={() => setAnswer("True")}>
                    <FaCheck className="me-1" />
                    True
                </button>
            </div>
            <div className="d-flex align-items-center">
                <ImArrowRight
                    size={40}
                    className={`me-2 ${answer === "False" ? "visible" : "invisible"}`}
                    color="#90c470"
                    style={{ filter: "drop-shadow(1px 1px 2px gray)" }}
                />
                <button className={`btn me-2 ${answer === "False" ? "btn-success" : "btn-outline-secondary"}`}
                    onClick={() => setAnswer("False")}>
                    <FaCheck className="me-1" />
                    false
                </button>
            </div>
        </div>
    </>
}