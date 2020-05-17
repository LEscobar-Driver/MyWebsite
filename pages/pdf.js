import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import PdfResume from '../components/PdfResume.js';
import { Link } from '../routes';

class PDF extends Component {

  render () {
    return (
      <Layout>

        <Link route="/#">
          {/* <a target="_blank">BACK</a> */}
          <Button color='red' circular icon='back'>Back</Button>
        </Link>

        <div>
          <PdfResume/>
        </div>

      </Layout>
    )
  }
}
export default PDF;