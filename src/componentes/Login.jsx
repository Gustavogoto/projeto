import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/formulario.css'

function BasicExample() {
  return (
    <div className='formulario'>
      <Form id='formulario-titulo'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Endereço Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          Nos não iremos compartilhar seu Email com mais ninguém.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;