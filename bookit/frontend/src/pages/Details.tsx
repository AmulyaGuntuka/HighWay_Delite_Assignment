import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getExperience } from '../api/api';
import { Experience, Slot } from '../types';

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exp, setExp] = useState<Experience | null>(null);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [seats, setSeats] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getExperience(id)
      .then((res) => {
        setExp(res.data);
        // preselect first available slot if present
        const firstSlot = res.data?.slots?.[0];
        if (firstSlot) setSelectedSlotId(firstSlot._id);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!exp) return <div className="p-6">Experience not found.</div>;

  // find selected slot object
  const selectedSlot: Slot | undefined =
    exp.slots?.find((s) => s._id === selectedSlotId) || exp.slots?.[0];

  const slotPrice = selectedSlot?.price || 0;
  const subtotal = slotPrice * seats;
  const taxes = 59;
  const total = subtotal + taxes;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <img
          src={exp.images && exp.images.length > 0 ? exp.images[0] : 'https://via.placeholder.com/800x400?text=No+Image'}
          alt={exp.title}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-semibold mb-2">{exp.title}</h1>
        <p className="text-gray-700 mb-6">{exp.description}</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Available slots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exp.slots.map((slot) => (
              <button
                key={slot._id}
                onClick={() => setSelectedSlotId(slot._id)}
                disabled={slot.capacity <= 0}
                className={`text-left p-3 rounded-lg border transition ${
                  selectedSlotId === slot._id
                    ? 'bg-yellow-400 text-black border-yellow-400'
                    : 'bg-white hover:bg-gray-50'
                } ${slot.capacity <= 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{slot.date} · {slot.time}</div>
                    <div className="text-sm text-slate-600">{slot.capacity} seats · ₹{slot.price} per seat</div>
                  </div>
                  <div className="text-sm font-medium">{slotPrice === slot.price && selectedSlotId === slot._id ? 'Selected' : ''}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Notes</h3>
          <p className="text-gray-600 text-sm">
            Minimum age 10. Safety gear provided. Times shown are local time (IST).
          </p>
        </div>
      </div>

      <div className="border rounded-xl p-5 bg-gray-50 h-fit">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Price per seat</span>
            <span className="font-medium">₹{slotPrice}</span>
          </div>

          <div className="flex justify-between items-center">
            <span>Quantity</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSeats(Math.max(1, seats - 1))}
                className="border rounded px-2"
              >
                -
              </button>
              <span>{seats}</span>
              <button
                onClick={() => setSeats(seats + 1)}
                className="border rounded px-2"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Taxes</span>
            <span>₹{taxes}</span>
          </div>

          <div className="flex justify-between text-lg font-semibold border-t pt-3">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={() =>
              navigate('/checkout', {
                state: {
                  experience: exp,
                  slotId: selectedSlot?._id,
                  seats,
                  date: selectedSlot?.date,
                  time: selectedSlot?.time,
                  price: selectedSlot ? selectedSlot.price : 0,
                },
              })
            }
            disabled={!selectedSlot || selectedSlot.capacity <= 0}
            className={`w-full py-2 mt-3 rounded ${
              selectedSlot && selectedSlot.capacity > 0
                ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
