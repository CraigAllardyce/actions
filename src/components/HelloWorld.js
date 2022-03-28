import React, { useState } from 'react';
import { css } from '@emotion/react';

export default function HelloWorld() {
    const [colour, setColour] = useState('#1dbd45');

    const setBlue = () => setColour('#0fc8f2');

    const setGreen = () => setColour('#1dbd45');

    const setYellow = () => setColour('#ffbd53');

    const setRed = () => setColour('#ef4023');

    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: calc(100vh - 120px);
            `}
        >
            <h1 data-test="page-title" style={{ color: colour }}>
                Hello World - 24
            </h1>

            <div
                css={css`
                    .btn {
                        margin: 0 8px;
                    }
                `}
            >
                <button type="button" className="btn btn-neutral" onClick={setBlue}>
                    Blue
                </button>

                <button type="button" className="btn btn-neutral" onClick={setGreen}>
                    Green
                </button>

                <button type="button" className="btn btn-neutral" onClick={setYellow}>
                    Yellow
                </button>

                <button type="button" className="btn btn-neutral" onClick={setRed}>
                    Red
                </button>
            </div>
        </div>
    );
}
