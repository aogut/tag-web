import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

class NumberEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [this.createEmptyEntry()],
    };

    this.refreshEntries = this.refreshEntries.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.handleNumeralInput = this.handleNumeralInput.bind(this);
    this.handleTagsInput = this.handleTagsInput.bind(this);
    this.handleNumeralOnBlur = this.handleNumeralOnBlur.bind(this);
  }

  createEmptyEntry() {
    return {
      numeral: '',
      unit: '',
      tags: [],
    };
  }

  refreshEntries() {
    this.setState({ entries: this.state.entries });
  }

  handleNumeralInput(i) {
    return function (e) {
      this.state.entries[i].numeral = e.target.value;
      this.refreshEntries();
    }.bind(this);
  }

  handleUnitInput(i) {
    return function (e) {
      this.state.entries[i].unit = e.target.value;
      this.refreshEntries();
    }.bind(this);
  }

  handleTagsInput(i) {
    return function (e) {
      this.state.entries[i].tags = e.target.value.split(',');
      this.refreshEntries();
    }.bind(this);
  }

  handleNumeralOnBlur() {
    const entries = this.state.entries;
    const newEntryNeeded = entries.findIndex((e) =>
      e.numeral.length === 0
    ) === -1;

    if (newEntryNeeded) {
      entries.push(this.createEmptyEntry());
      this.refreshEntries(entries);
    }
  }

  handleSave() {
    const pendingSaved = this.state.entries.filter((e) =>
      e.numeral && e.numeral.trim().length > 0
    );

    console.log(pendingSaved.map(e => e.numeral));
    this.props.onSave(pendingSaved);
  }

  renderRow(entry, i) {
    return (
      <div key={i}>
        <FormControl
          type="text" name="numeral"
          placeholder="Number"
          value={entry.numeral}
          onChange={this.handleNumeralInput(i)}
          onBlur={this.handleNumeralOnBlur}
        />

        <FormControl
          type="text" name="unit"
          placeholder="Unit"
          value={entry.unit}
          onChange={this.handleUnitInput(i)}
        />

        <FormControl
          type="text" name="tags"
          placeholder="tags"
          className="tags" value={entry.tags}
          onChange={this.handleTagsInput(i)}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Form inline>
          {this.state.entries.map(this.renderRow)}
          <Button bsStyle="primary" onClick={this.handleSave}>Save</Button>
        </Form>
      </div>
    );
  }
}

NumberEntryForm.propTypes = {
  onSave: React.PropTypes.func.isRequired,
};

export default NumberEntryForm;
