"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function NetworkGraph() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clean up previous renders
        containerRef.current.innerHTML = "";

        const width = containerRef.current.clientWidth;
        const height = 600;

        const data = {
            nodes: [
                { id: "origin", group: 1, radius: 24, label: "randomhealthnews.com" },
                { id: "node1", group: 2, radius: 12, label: "Twitter Bot Net A" },
                { id: "node2", group: 2, radius: 10, label: "Facebook Group: TruthSeekers" },
                { id: "node3", group: 2, radius: 8, label: "User @anon_732" },
                { id: "node4", group: 3, radius: 16, label: "Viral Telegram Channel" },
                { id: "node5", group: 2, radius: 14, label: "Reddit /r/conspiracies" },
                { id: "node6", group: 3, radius: 10, label: "HealthFakeBlog Repost" },
                { id: "node7", group: 2, radius: 12, label: "WhatsApp Forward Chain" },
                { id: "node8", group: 3, radius: 8, label: "User @health_guru" },
            ],
            links: [
                { source: "origin", target: "node1", value: 5 },
                { source: "origin", target: "node2", value: 3 },
                { source: "node1", target: "node3", value: 1 },
                { source: "node1", target: "node4", value: 4 },
                { source: "origin", target: "node5", value: 2 },
                { source: "node5", target: "node6", value: 2 },
                { source: "node4", target: "node6", value: 1 },
                { source: "node1", target: "node7", value: 3 },
                { source: "node7", target: "node8", value: 2 },
            ]
        };

        const svg = d3.create("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height]);

        const simulation = d3.forceSimulation(data.nodes as any)
            .force("link", d3.forceLink(data.links).id((d: any) => d.id).distance(120))
            .force("charge", d3.forceManyBody().strength(-400))
            .force("center", d3.forceCenter(width / 2, height / 2));

        const link = svg.append("g")
            .attr("stroke", "#00e5ff")
            .attr("stroke-opacity", 0.4)
            .selectAll("line")
            .data(data.links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value) * 1.5);

        const node = svg.append("g")
            .attr("stroke", "#0d0d12")
            .attr("stroke-width", 2)
            .selectAll("circle")
            .data(data.nodes)
            .join("circle")
            .attr("r", d => d.radius)
            // Group 1: Source (Red), Group 2: Amplifiers (Cyan), Group 3: Super-spreaders (Green/Amber)
            .attr("fill", d => d.group === 1 ? "#ff3333" : d.group === 2 ? "#00f0ff" : "#ffaa00");

        // Add glowing filter definition
        const defs = svg.append("defs");
        const filter = defs.append("filter").attr("id", "glow");
        filter.append("feGaussianBlur").attr("stdDeviation", "3").attr("result", "coloredBlur");
        const feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode").attr("in", "coloredBlur");
        feMerge.append("feMergeNode").attr("in", "SourceGraphic");

        node.attr("filter", "url(#glow)");

        node.append("title")
            .text(d => d.label);

        const labels = svg.append("g")
            .selectAll("text")
            .data(data.nodes)
            .join("text")
            .text(d => d.label)
            .attr("font-size", 11)
            .attr("fill", "#e2e8f0")
            .attr("dx", 18)
            .attr("dy", 4)
            .attr("class", "font-mono pointer-events-none")
            .style("text-shadow", "0 0 5px #050508, 0 0 10px #050508");

        simulation.on("tick", () => {
            link
                .attr("x1", (d: any) => d.source.x)
                .attr("y1", (d: any) => d.source.y)
                .attr("x2", (d: any) => d.target.x)
                .attr("y2", (d: any) => d.target.y);

            node
                .attr("cx", (d: any) => d.x)
                .attr("cy", (d: any) => d.y);

            labels
                .attr("x", (d: any) => d.x)
                .attr("y", (d: any) => d.y);
        });

        if (svg.node()) {
            containerRef.current.appendChild(svg.node()!);
        }

        return () => {
            simulation.stop();
        };
    }, []);

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                className="w-full h-[600px] cyber-glass rounded-xl overflow-hidden border border-cyber-panel-border relative"
                style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.05) 0%, transparent 70%)' }}
            >
                <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10 pointer-events-none">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-cyber-red" />
                        <span className="text-xs font-mono text-cyber-text-secondary">Original Source</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-cyber-amber" />
                        <span className="text-xs font-mono text-cyber-text-secondary">Super Spreaders</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-cyber-cyan" />
                        <span className="text-xs font-mono text-cyber-text-secondary">Amplifiers / Reposts</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
