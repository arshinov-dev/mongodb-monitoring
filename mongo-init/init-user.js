// Создаём пользователя для мониторинга с минимальными правами
db = db.getSiblingDB('admin');

db.createUser({
  user: 'monitor',
  pwd: 'monitor123',
  roles: [
    { role: 'read', db: 'admin' },
    { role: 'read', db: 'local' },
    { role: 'clusterMonitor', db: 'admin' },
    { role: 'read', db: 'config' }
  ]
});

print('✅ User "monitor" created for mongodb_exporter');