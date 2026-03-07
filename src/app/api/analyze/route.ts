import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { input } = await req.json();

        if (!input) {
            return NextResponse.json({ error: "No input provided" }, { status: 400 });
        }

        const inputLower = input.toLowerCase();

        // Simulate AI analysis based on keywords
        let score = 50;
        let claim = input.length > 60 ? input.substring(0, 60) + "..." : input;
        let status = "Misleading";
        let reasoning = [];
        let sources = [];
        let disclaimer = "";

        const currentTime = new Date().toISOString().split("T")[0];

        if (inputLower.includes("covid") && (inputLower.includes("cure") || inputLower.includes("hot water"))) {
            score = 21;
            claim = "Hot water cures COVID-19.";
            status = "Likely Fake";
            reasoning = [
                "Claim directly contradicts verified medical research statements from WHO and CDC.",
                "Language indicates sensational and absolute framing ('cures') without scientific backing.",
                "Source domain has historical low reliability score (21/100).",
                "No credible scientific publications cited within the original text."
            ];
            sources = [
                { name: "WHO Database", status: "contradicts", url: "#" },
                { name: "CDC Fact Check", status: "contradicts", url: "#" },
                { name: "Reuters Health", status: "no-evidence", url: "#" }
            ];
            disclaimer = `DISCLAIMER: As of ${currentTime}, global health organizations actively classify claims regarding hot water curing COVID-19 as categorically false. This narrative is dangerous as it may discourage individuals from seeking verified medical treatments.`;
        } else if (inputLower.includes("election") || inputLower.includes("vote")) {
            score = 35;
            claim = "Election results were manipulated.";
            status = "Misleading";
            reasoning = [
                "Claim lacks verifiable evidence from independent election monitors.",
                "Language uses emotional triggers common in political propaganda.",
                "Similar claims have been debunked by major news outlets."
            ];
            sources = [
                { name: "AP News Fact Check", status: "no-evidence", url: "#" },
                { name: "Electoral Commission", status: "contradicts", url: "#" }
            ];
            disclaimer = `DISCLAIMER: Claims regarding widespread election manipulation trigger high-alert algorithms. Real-time data up to ${currentTime} from independent monitors show no evidence supporting this specific assertion. Treat with extreme caution.`;
        } else if (inputLower.includes("water") && inputLower.includes("hydrate")) {
            score = 95;
            claim = "Drinking water keeps you hydrated.";
            status = "Reliable";
            reasoning = [
                "Claim aligns perfectly with universally accepted scientific facts.",
                "Language is neutral and factual.",
                "Extensive medical literature supports this statement."
            ];
            sources = [
                { name: "NIH Medical Encyclopedia", status: "verified", url: "#" },
                { name: "Mayo Clinic", status: "verified", url: "#" }
            ];
            disclaimer = `DISCLAIMER: This claim is verified as true. Basic human physiology dictates that water intake is the primary mechanism for hydration. Real-time medical consensus remains unchanged on this fact.`;
        } else {
            // Generic random response
            score = Math.floor(Math.random() * 40) + 30; // 30 - 70
            claim = input.length > 50 ? input.substring(0, 50) + "..." : input;
            status = score > 60 ? "Reliable" : score > 30 ? "Misleading" : "Likely Fake";

            reasoning = [
                "Analysis of linguistic patterns shows mixed indicators.",
                "Cross-referencing with databases yielded partial matches.",
                "Source reputation is currently unverified or neutral."
            ];

            sources = [
                { name: "NewsAggregator DB", status: "no-evidence", url: "#" },
                { name: "Independent Fact Checkers", status: score > 60 ? "verified" : "contradicts", url: "#" }
            ];

            if (score > 60) {
                disclaimer = `DISCLAIMER: Based on real-time web scans as of ${currentTime}, this claim aligns with prevailing evidence. The system rates this as likely true, but nuance may exist depending on context.`;
            } else if (score > 30) {
                disclaimer = `DISCLAIMER: Warning. This claim lacks sufficient real-time evidence as of ${currentTime}. The AI detected potential logical leaps or highly subjective framing. Exercise critical thinking.`;
            } else {
                disclaimer = `DISCLAIMER: This information strongly correlates with known misinformation profiles. Real-time cross-referencing against trusted indexes up to ${currentTime} failed to verify the core assertions. Likely fabricated or highly distorted.`;
            }
        }

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        return NextResponse.json({
            score,
            claim,
            status,
            reasoning,
            sources,
            disclaimer
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
