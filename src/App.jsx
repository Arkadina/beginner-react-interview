import { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import { motion } from "framer-motion";

function App() {
    const [cells, setCells] = useState(["a", "b", "c"]);

    function handleOnChange(value, key) {
        let newCells = cells;
        newCells[key] = value;
        setCells(newCells);
    }

    function handleOnClick(e, key) {
        if (e.target.localName == "div") {
            let newCells = cells;
            let joinCellAfter = [];
            let joinCellBefore = [];

            newCells.forEach((item, index) => {
                if (index >= key + 1) {
                    joinCellBefore.push(item);
                } else {
                    joinCellAfter.push(item);
                }
            });
            newCells = [...joinCellAfter, "", ...joinCellBefore];
            setCells(newCells);
        }
    }

    return (
        <div className="App">
            <div className="cellContainer">
                {cells.map((item, key) => (
                    <motion.div
                        className="cell"
                        key={key}
                        onClick={(e) => handleOnClick(e, key)}
                        initial={{
                            opacity: 1,
                        }}
                        animate={{
                            opacity: 1,
                            transform: ["translatex(100px)", "translatex(0px)"],
                        }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 20,
                            damping: 10,
                        }}
                    >
                        <input
                            type="text"
                            maxLength="2"
                            placeholder={item}
                            onChange={(e) =>
                                handleOnChange(e.target.value, key)
                            }
                        />
                    </motion.div>
                ))}
            </div>
            <div className="cellContainerText">
                {cells ? cells.toString() : ""}
            </div>
        </div>
    );
}

export default App;
