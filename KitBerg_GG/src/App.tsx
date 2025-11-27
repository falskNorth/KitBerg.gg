import {useState} from "react";
import {LoadingScreen} from "./components/LoadingScreen";
import {MainMenu} from "./components/MainMenu";
import {AboutPage} from "./components/AboutPage";
import {RecruitersPage} from "./components/RecruitersPage";
import {ClipsPage} from "./components/ClipsPage";
import {ProjectsPage} from "./components/ProjectsPage";

type Page = "loading" | "menu" | "about" | "recruiters" | "clips" | "projects";

export default function App() {
    const [currentPage, setCurrentPage] = useState<Page>("loading");

    const handleLoadComplete = () => {
        setCurrentPage("menu");
    };

    const handleNavigate = (page: string) => {
        setCurrentPage(page as Page);
    };

    const handleBack = () => {
        setCurrentPage("menu");
    };

    let ticker = Array.from({length: 12}, (_, i) => (
        <span key={i} className="inline-block px-8"> ⚠ WORK IN PROGRESS ⚠ </span>
    ));
    return (
        <>
            {/* Scrolling "Work In Progress" bar */}
            {/* WORK IN PROGRESS BAR – perfectly smooth on any screen size */}

            {currentPage !== "loading" && (
                <div className="fixed inset-x-0 top-0 z-50 bg-yellow-900/90 border-b border-yellow-600 overflow-hidden">
                    <div className="inline-block whitespace-nowrap py-1 text-sm font-mono text-yellow-300" style={{animation: "marquee 75s linear infinite"}} >
                        {ticker}
                        {ticker} {/* duplicate */}
                    </div>
                </div>
            )}

            {currentPage === "loading" && (
                <LoadingScreen onLoadComplete={handleLoadComplete}/>
            )}
            {currentPage === "menu" && (
                <MainMenu onNavigate={handleNavigate}/>
            )}
            {currentPage === "about" && (
                <AboutPage onBack={handleBack}/>
            )}
            {currentPage === "recruiters" && (
                <RecruitersPage onBack={handleBack}/>
            )}
            {currentPage === "clips" && (
                <ClipsPage onBack={handleBack}/>
            )}
            {currentPage === "projects" && (
                <ProjectsPage onBack={handleBack}/>
            )}
        </>
    );
}