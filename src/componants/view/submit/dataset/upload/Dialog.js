import { DropzoneDialog } from "material-ui-dropzone";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles =  makeStyles((theme) => ({
    text: {
        fontSize: '1.0rem'
    },
    previewContainer: {
        justifyContent: 'center'
    }
}));

export default function ViewSubmitDatasetUploadDialog(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleAdd = newFiles => {
        console.log(newFiles)
    };

    const handleSave = (file) => {
        file = file[0];

        if (!file.type === 'text/plain') {
            return;
        }

        const name = file.name;
        const reader = new FileReader();
        const setFileState = (sequences) => {
            if (props.context === 'source') {
                dispatch({ type: 'DATASET_FILE_SOURCE', name: name, sequences: sequences }, []);
                props.setOpen(false);
            } else if (props.context === 'reservoir') {
                dispatch({ type: 'DATASET_FILE_RESERVOIR', name: name, sequences: sequences }, []);
                props.setOpen(false);
            }
        }

        reader.onload = (e) => setFileState(e.target.result);
        reader.readAsText(file, 'utf-8');
        dispatch({ type: 'UPLOAD_DATASET_VALIDATED', status: false}, [])
    }

    return [
        <DropzoneDialog
            open={props.open}
            onSave={handleSave}
            maxFileSize={20000000}
            onClose={() => props.setOpen(false)}
            filesLimit={1}
            showPreviewsInDropzone={true}
            showFileNamesInPreview={true}
            showFileNames={true}
            useChipsForPreview={true}
            previewChipProps={{color: 'primary', variant: 'default'}}
            previewGridClasses={{container: classes.previewContainer}}
            showPreviews={false}
            dropzoneParagraphClass={classes.text}
            dropzoneText={`Drag and drop your ${props.context} FASTA file here, or click to browse.`}
            dialogTitle={`Upload ${props.context} Sequences`}
            submitButtonText={'Done'}
            onAdd={handleAdd}
        />
    ]
}