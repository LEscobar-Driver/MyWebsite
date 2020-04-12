import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Icon} from 'semantic-ui-react';

export default class PdfResume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    url: "../static/assets/MasterResume.pdf"
  }

  onRender = ({ blob }) => {
    this.setState({ url: URL.createObjectURL(blob) })
  }

  download(url, name) {
    var link = document.createElement('a');
    link.download = 'Luis Driver - MasterResume.pdf';
    link.href = "../static/assets/MasterResume.pdf";
    link.click();
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 1,
    });
  };

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  render() {
    const { numPages, pageNumber } = this.state;

    return (
        <React.Fragment>
          <Document
            file="../static/assets/MasterResume.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
          <Page pageNumber={pageNumber} />
          </Document>
          <div>
            <span style={{"color":"black"}}>
              <p>
                <strong>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</strong>
              </p>
            </span>
            {/* <p>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</p> */}
            <Button
              disabled={pageNumber <= 1}
              compact
              content='Previous'
              circular
              color='black'
              onClick={this.previousPage}
            >
              <Icon name='left arrow' style={{"color":"grey"}}/>
              Previous
            </Button>
            <Button
              disabled={pageNumber >= numPages}
              compact
              content='Next'
              circular
              color='black'
              onClick={this.nextPage}
            >
              Next
              <Icon name='right arrow' style={{"color":"grey"}}/>
            </Button>
            <Button
              compact
              content='Download Resume'
              circular
              color='black'
              onClick={this.download}
            >
              Download Resume
              <Icon name='download' style={{"color":"grey", marginLeft:'7px'}}/>
            </Button>
          </div>
        </React.Fragment>
    );
  }
}