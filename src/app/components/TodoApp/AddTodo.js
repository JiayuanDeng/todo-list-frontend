import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoListActions'
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  form: {
    width: 'calc(100% - 30px)',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  button: {
    width: 'calc(100% - 30px)',
    marginLeft: '15px',
    marginRight: '15px'
  }
});

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextTodoId: 0,
      input: ''
    };
  }

  handleChange = event => {
    this.setState({input: event.target.value});
  };

  render() {
    const {classes} = this.props;
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{flex: 1}}>
          <FormControl className={classes.form}>
            <InputLabel>New Todo</InputLabel>
            <Input value={this.state.input} onChange={this.handleChange}/>
          </FormControl>
        </div>
        <div style={{flex: 0, height: 64}}>
          <Button
            className={classes.button}
            variant='raised'
            color='primary'
            onClick={() => {
              this.props.onAddTodoClick(this.state.nextTodoId, this.state.input);
              this.setState({
                nextTodoId: this.state.nextTodoId + 1,
                input: ''
              });
            }}
          >
            Add Todo
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTodoClick: (id, text) => dispatch(addTodo(id, text))
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(AddTodo));