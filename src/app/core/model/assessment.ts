import { AbstractResponse } from "./abstract-response";
import { Quiz } from "./quiz";

/**
 * Data Transfer Object (DTO) for sending response data related to an Assessment.
 * This DTO encapsulates the assessment data sent back to clients in response to their requests.
 */
export interface AssessmentResponseDto extends AbstractResponse {
    quiz: Quiz;
    user: {};
    startedAt: Date;
    finishedAt?: Date;
    percentageResult: number;
    succeeded: boolean;
}