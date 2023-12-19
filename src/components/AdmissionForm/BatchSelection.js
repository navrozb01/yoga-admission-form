import React from "react";

const BatchSelection = ({ onSelectBatch }) => {
    const batches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];

    return (
        <div>
            <label>
                Select Batch: 
                <select name = "batch" onChange={(e) => onSelectBatch(e.target.value)} required>
                    <option value="" disabled>
                        Choose a Batch
                    </option>
                    {batches.map((batch) => (
                        <option key={batch} value={batch}>
                            {batch}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default BatchSelection;