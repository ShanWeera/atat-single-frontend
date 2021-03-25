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

    const handleSave = (file) => {
        if (props.context === 'source') {
            dispatch({ type: 'DATASET_FILE_SOURCE', file: file }, []);
            props.setOpen(false);
        } else if (props.context === 'reservoir') {
            dispatch({ type: 'DATASET_FILE_RESERVOIR', file: file }, []);
            props.setOpen(false);
        }
    }

    return [
        <DropzoneDialog
            open={props.open}
            onSave={handleSave}
            acceptedFiles={['text/plain']}
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
        />
    ]
}