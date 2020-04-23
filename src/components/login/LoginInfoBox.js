import React from 'react';
import Container from 'react-bootstrap/Container'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    box:{
        margin:"0 auto",
        boxShadow: '0px 0px 5px grey',
        paddingTop: '50px',
        paddingBottom: '50px',
        borderRadius: '8px',
        fontFamily: "'Roboto Mono', monospace"
    },
    center:{
        margin:"0 auto"
    },
    button:{
        marginTop:"30px"
    },
    textfield:{
        padding:"5px",
        textAlign:"center"
    }
})

export default function Box(){
    const classes = useStyles()
    return (
        <Container fluid>
            <Container className={[classes.box]}>
                <Row className={["m-1","p-1"]}>
                    <TextField label="Sudhar Super User-Name" className={[classes.center , classes.textfield]}/>
                </Row>
                <Row className={["m-1","p-1"]}>
                    <TextField label="Password" className={[classes.center, classes.textfield]}/>
                </Row>
                <Row className={["m-1","p-1"]}>
                    <Button variant="contained" color="primary" className={[classes.center , classes.button]}>Sign In</Button>
                </Row>
            </Container>
        </Container>
    )
}
