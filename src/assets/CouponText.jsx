export default function CouponText({ text }) {
    return (
        <svg
            height="100%"
            width="260%"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                pointerEvents: "none",
                userSelect: "none",
            }}
            className="absolute"
        >
            <defs>
                <filter id="dropShadow">
                    <feDropShadow
                        dx="0.2"
                        dy="0.4"
                        stdDeviation="0.2"
                        floodColor="white"
                        floodOpacity="0.25"
                    />
                </filter>
                <text
                    id="text"
                    x="0"
                    y="40"
                    textAnchor="left"
                    className="text-4xl"
                >
                    -{text}% -{text}% -{text}%
                </text>
            </defs>
            <g
                style={{
                    transform: "rotate(-45deg) translate3d(-50%, 10%, 0)",
                    fontFamily: "Stalinist One",
                    fill: "rgba(255,255,255,.1)",
                    filter: "url(#dropShadow)",
                }}
            >
                <use xlinkHref="#text" y="0" />
                <use xlinkHref="#text" y="40" />
                <use xlinkHref="#text" y="80" />
                <use
                    xlinkHref="#text"
                    y="120"
                    textAnchor="left"
                    className="text-4xl fill-orange-500"
                />
                <use xlinkHref="#text" y="160" />
                <use xlinkHref="#text" y="200" />
                <use xlinkHref="#text" y="240" />
            </g>
        </svg>
    )
}
