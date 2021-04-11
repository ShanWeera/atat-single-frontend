const setKmerLengthReducer = (state = '9', action) => {
    if (action.type === 'KMER_LEN_CHANGED') {
        return action.kmerLength;
    }

    return state;
};

export default setKmerLengthReducer;
