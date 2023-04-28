import ky from "ky";
import {FetchHHCardDTO, metricsDTO} from "./dto";

const BACKEND_URL = "http://api/fiveheadsapp-api/v1"

export const fetchHHCardData = async (teamId:number): Promise<metricsDTO|null> => {
    return await ky.get(`${BACKEND_URL}/team/metrics-values/${teamId}`
    ).then(res => res.ok?res.json():Promise.resolve(null))
}

