import React, {Component} from 'react';
import { Card, Button, Popup, Image, Dimmer, Header, Icon, Grid, Divider} from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import PdfResume from '../components/PdfResume.js';


class PDF extends Component {
  render () {
    return (
      <Layout>
        <div>
          <PdfResume/>
        </div>
      </Layout>
    )
  }
}
export default PDF;