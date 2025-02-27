import Sidebar from "@/components/layout/Sidebar";

export default function Dashboard(session: string | null) {
    if (!session) return null;

    return <Sidebar />;
}