import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const ExamplePDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: 'https://cors-anywhere.herokuapp.com/http://ncert.nic.in/textbook/pdf/kehb115.pdf',
            }}
        />
    )
}

export default ExamplePDFViewer