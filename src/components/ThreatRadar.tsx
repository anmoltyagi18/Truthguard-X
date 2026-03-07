"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { subject: 'Health Myths', threat: 120, velocity: 110, fullMark: 150 },
    { subject: 'Election Integrity', threat: 140, velocity: 130, fullMark: 150 },
    { subject: 'Crypto Scams', threat: 86, velocity: 130, fullMark: 150 },
    { subject: 'AI Audio Fakes', threat: 99, velocity: 100, fullMark: 150 },
    { subject: 'Geopolitics', threat: 115, velocity: 90, fullMark: 150 },
    { subject: 'Climate Denials', threat: 65, velocity: 85, fullMark: 150 },
];

export default function ThreatRadar() {
    return (
        <div className="w-full h-[450px] cyber-glass rounded-xl p-6 border border-cyber-panel-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-red/5 rounded-full blur-[80px] pointer-events-none" />
            <h3 className="text-lg font-bold font-mono tracking-widest text-cyber-text-primary mb-2 flex justify-between items-center">
                <span>THREAT VECTOR ANALYSIS</span>
                <span className="text-xs text-cyber-green bg-cyber-green/10 px-2 py-1 rounded border border-cyber-green">LIVE</span>
            </h3>

            <ResponsiveContainer width="100%" height="85%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
                    <PolarGrid stroke="#1a1a24" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 11, fontFamily: 'monospace' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />

                    <Radar name="Threat Level" dataKey="threat" stroke="#ff3333" fill="#ff3333" fillOpacity={0.3} />
                    <Radar name="Velocity (Spread)" dataKey="velocity" stroke="#00f0ff" fill="#00f0ff" fillOpacity={0.3} />

                    <Tooltip
                        contentStyle={{ backgroundColor: '#0d0d12', border: '1px solid #1a1a24', color: '#fff', borderRadius: '8px' }}
                        itemStyle={{ fontFamily: 'monospace', fontSize: '12px' }}
                    />
                    <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '12px', paddingTop: '20px' }} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
