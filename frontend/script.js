// frontend/script.js
const form = document.getElementById('payment-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!localStorage.getItem('token')) {
    alert('You must log in first.');
    return;
  }

  const amount = document.getElementById('amount').value;

  const res = await fetch('http://localhost:5000/api/payments/pay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    body: JSON.stringify({ amount, currency: 'USD' }),
  });

  const data = await res.json();

  if (!data.links || !Array.isArray(data.links)) {
    alert('Unexpected response from server');
    console.error('Payment response:', data);
    return;
  }

  const approvalLink = data.links.find(link => link.rel === 'approve');

  if (approvalLink) {
    window.location.href = approvalLink.href;
  } else {
    alert('Payment initiation failed. No approval link found.');
  }
});
