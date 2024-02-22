
import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InputBox.tsx";
import { type ReactNode } from "react";

type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
    goals,
    onDeleteGoal,
}: CourseGoalListProps) {
    if (goals.length === 0) {
        return (
            <InfoBox
                mode="hint">
                You have no course gaols yet. Start adding some!
            </InfoBox>
        );
    }

    let warningBox: ReactNode;

    if (goals.length >=4) {
        warningBox = <InfoBox mode="warning" severity="">
            You're collection  a lot of goals. Don't put too  on your plante!
        </InfoBox>
    }

    return (
    <>
        {warningBox}
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal
                        id={goal.id}
                        title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.discription}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    </>

    );
}