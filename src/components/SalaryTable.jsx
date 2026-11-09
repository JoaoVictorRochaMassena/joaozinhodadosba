import React, { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

export default function SalaryTable({ cargos }) {
  const [busca, setBusca] = useState('');
  const [selecionado, setSelecionado] = useState(null);
  const filtrados = cargos.filter(item => item.cargo.toLocaleLowerCase('pt-BR').includes(busca.toLocaleLowerCase('pt-BR')));

  return (
    <div>
      <Form.Group className="mb-4" controlId="busca-cargo">
        <Form.Label className="fw-semibold">Buscar cargo</Form.Label>
        <Form.Control value={busca} onChange={e => setBusca(e.target.value)} placeholder="Ex.: Desenvolvedor, DBA..." />
      </Form.Group>
      <Table bordered hover responsive striped className="align-middle mb-2">
        <thead className="table-primary"><tr><th>Cargo</th><th>Piso de exemplo</th><th>Jornada</th><th>Ação</th></tr></thead>
        <tbody>
          {filtrados.map(item => <tr key={item.id}><td className="fw-semibold">{item.cargo}</td><td>{item.piso}</td><td>{item.jornada}</td><td><Button variant="outline-primary" size="sm" onClick={() => setSelecionado(item)}>Ver detalhes / carga horária</Button></td></tr>)}
          {filtrados.length === 0 && <tr><td colSpan={4} className="text-center py-4">Nenhum cargo encontrado.</td></tr>}
        </tbody>
      </Table>
      <p className="small text-secondary mb-0">Valores fictícios para a atividade. Consulte fontes oficiais antes de usar valores reais.</p>
      <Modal show={selecionado !== null} onHide={() => setSelecionado(null)} centered>
        <Modal.Header closeButton><Modal.Title>{selecionado?.cargo}</Modal.Title></Modal.Header>
        <Modal.Body><p><strong>Piso de exemplo:</strong> {selecionado?.piso}</p><p><strong>Carga horária:</strong> {selecionado?.jornada}</p><p className="mb-0"><strong>Atividades:</strong> {selecionado?.detalhes}</p></Modal.Body>
        <Modal.Footer><Button variant="primary" onClick={() => setSelecionado(null)}>Fechar</Button></Modal.Footer>
      </Modal>
    </div>
  );
}
