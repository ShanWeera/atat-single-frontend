import {get, post} from "./base"

const ATAT = {
    index: (id) => get(`/info/${id}`),
    results: (id) => get(`/results/${id}`),
    groupedPosition: (id, position) => get(`/results/${id}/position/grouped/${position}`),
    sourcePosition: (id, position) => get(`/results/${id}/position/source/${position}`),
    reservoirPosition: (id, position) => get(`/results/${id}/position/reservoir/${position}`),
    positionCount: (id) => get(`/results/${id}/position/count`)
}

export default ATAT
