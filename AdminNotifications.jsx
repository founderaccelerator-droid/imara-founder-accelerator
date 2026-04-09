import React, { useState, useEffect } from "react";

const AdminNotifications = ({ fetchNotifications }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Charger les notifications initiales
    const load = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };
    load();

    // Simuler notifications temps réel toutes les 10s
    const interval = setInterval(async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    }, 10000);

    return () => clearInterval(interval);
  }, [fetchNotifications]);

  return (
    <div className="p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Notifications en temps réel</h2>
      {notifications.length === 0 ? (
        <p>Aucune notification récente</p>
      ) : (
        <ul>
          {notifications.map((notif, idx) => (
            <li key={idx} className="mb-2 border-b pb-2">
              <p className="font-semibold">{notif.title}</p>
              <p>{notif.message}</p>
              <p className="text-sm text-gray-500">{new Date(notif.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminNotifications;
