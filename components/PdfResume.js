import React, {Component} from 'react';
import { Document, Page} from 'react-pdf';
import { Button, Icon, Container, Grid} from 'semantic-ui-react';


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
      <Container fluid textAlign='left'>
        <Grid columns={3} >
          <Grid.Row>

            <Grid.Column width={4}>
            </Grid.Column>

            <Grid.Column>
              <React.Fragment>
                <div style={{marginTop: '15px'}}> 
                  <Document
                    file="../static/assets/MasterResume.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber}/>
                  </Document>
                </div>

                <div>
                  <span>
                    <p style={{"color":"white", marginTop: '10px', marginBottom: '10px' }}>
                      <strong>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</strong>
                    </p>
                  </span>

                  <Button.Group>
                    <Button
                      disabled={pageNumber <= 1}
                      compact
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
                      circular
                      color='black'
                      onClick={this.nextPage}
                    >
                      Next
                      <Icon name='right arrow' style={{"color":"grey"}}/>
                    </Button>
                  </Button.Group>

                  <div style={{marginTop: '5px'}}>
                    <Button
                      floated='left'
                      compact
                      color='black'
                      onClick={this.download}
                    >
                      Download Resume
                      <Icon name='download' style={{"color":"grey", marginLeft:'10px'}}/>
                    </Button>
                  </div>

                </div>
              </React.Fragment>
            </Grid.Column>

            <Grid.Column width={4}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}