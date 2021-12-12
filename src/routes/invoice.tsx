import { useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';

export default function Invoice() {
  const { invoiceId } = useParams();
  if (!invoiceId) return null;

  const invoice = getInvoice(parseInt(invoiceId, 10));
  const navigate = useNavigate();

  return (
    <main style={{ padding: '1rem' }}>
      {invoice ? (
        <>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
          <p>
            <button
              onClick={() => {
                deleteInvoice(invoice.number);
                navigate('/invoices');
              }}
            >
              Delete
            </button>
          </p>
        </>
      ) : (
        <h2>Invalid invoice id!</h2>
      )}
    </main>
  );
}
