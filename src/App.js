import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './views/Timer'
import SimpleCard from './views/QueNumbering'
import PersistentDrawerRight from './views/Structure'
import Content from './views/IntroPage/Content'
import Header from './views/IntroPage/Header'
import Navigator from './views/IntroPage/Navigator'
import Paperbase from './views/IntroPage/PaperBase'
import ExamplePDFViewer from './views/Pdf/look'
import GoogleDocsViewer from 'react-google-docs-viewer';

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';


function App() {
  return (
    <div className="App">
        <PersistentDrawerRight/>
        {/* <Timer /> */}
        {/* <OutlinedChips /> */}
        {/* <SimpleCard/> */}
        {/* <Header/> */}
        {/* <Content/> */}
        {/* <Navigator/> */}
        {/* <Paperbase/> */}
        {/* <SignIn/> */}
        {/* <ExamplePDFViewer/> */}
        {/* <GoogleDocsViewer
  width="1200px"
  height="500px"
  fileUrl="http://infolab.stanford.edu/pub/papers/google.pdf"
/> */}
{/* <PDFViewer url="http://www.africau.edu/images/default/sample.pdf" /> */}
{/* <PdfViewerComponent id="container" documentPath="2017p1.pdf" serviceUrl="https://drive.google.com/file/d/0BxIR7Kj71SMKN1NaQ3FrbU5STTA/view" style={{ 'height': '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]}/>
            </PdfViewerComponent>; */}

        
    </div>
  );
}

export default App;
