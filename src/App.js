import React, { Component } from 'react';
import Modal from 'react-modal';
import { ReactiveBase, DataSearch, SelectedFilters } from '@appbaseio/reactivesearch';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Ticket from './components/Ticket';

Modal.setAppElement('#root');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDesc: true,
      modalIsOpen: false,
      modalTicket: 1,
    }
  }

  toggleDesc = () => {
    this.setState({
      showDesc: ! this.state.showDesc
    })
  }

  openModal = (ticket) => {
    this.setState({
      modalIsOpen: true,
      modalTicket: ticket
      });
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <section className="container">
        <ReactiveBase 
          app="wptrac"
          url="https://es.wpteamhub.com/"
        >
          <div className="flex row-reverse app-container">
            <Header toggleShowDesc={this.toggleShowDesc} />
            <div className="results-container">
              <DataSearch
                className="search-bar"
                componentId="search"
                filterLabel="Search"
                dataField={["all_content", "link"]}
                URLParams
                fuzziness={2}
              />
              <SelectedFilters className="selected-filters" />
              <Results showDesc={this.state.showDesc} toggleDesc={this.toggleDesc} showTicket={this.openModal} />
              <Modal className="modal" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
                <Ticket ticket={this.state.modalTicket} close={this.closeModal}/>
              </Modal>
            </div>
            <div className="footer">
              <p>Created by <a href="https://twitter.com/earnjam">William Earnhardt</a> | Powered by <a href="https://www.bluehost.com">Bluehost</a> | <a href="https://github.com/earnjam/wptracsearch">View on GitHub</a></p>
            </div>
          </div>
        </ReactiveBase>
      </section>
    );
  }
}

export default App;
