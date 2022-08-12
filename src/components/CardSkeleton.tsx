import { FC } from "react";
import { StyledSkeletonCard } from "./styles/CardSkeleton.styled";

interface Props {
    userTheme: string
}

const CardSkeleton: FC<Props> = ({ userTheme }: Props) => {
    return (
        <StyledSkeletonCard myTheme={userTheme}>
            <div className="country">
                <div className="country__image skeleton"></div>
                <div className="country__info">
                    <div className="country__name skeleton skeleton-text">
                    </div>
                    <div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text">                            
                        </div>
                    </div>
                </div>
            </div>
        </StyledSkeletonCard>
    )
}

export default CardSkeleton;