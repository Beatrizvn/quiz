"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const MyQuizzes = () => {
    const router = useRouter();
    const handleSubmit = () => { router.push("/my-quizzes/create"); };

    return (
        <div>
            <Button label="Criar Novo Quiz" onClick={handleSubmit} />
            <p>pagina de quizzes</p>
        </div>
    );
}
export default MyQuizzes;