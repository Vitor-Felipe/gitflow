const moment = require('../methods/common');

module.exports = {
  get_all: sql => {
    return new Promise((resolve, reject) => {
      sql.query("CALL user_get_all()", (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },
  user_get_by_id: (sql, body) => {
    return new Promise((resolve, reject) => {
      sql.query("CALL user_get_by_id(?)", [body.code_user], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },
  post: (sql, body) => {
    return new Promise((resolve, reject) => {
      sql.query(
        `CALL user_add(?,?,?,?,?,?,?)`,
        [
          body.name,
          body.email,
          body.password,
          body.sex,
          body.birth_date,
          moment.now,
          moment.now
        ],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  put: (sql, body) => {
    return new Promise((resolve, reject) => {
      sql.query(
        "CALL user_update(?,?,?,?,?,?,?)",
        [
          body.code_user,
          body.name,
          body.email,
          body.password,
          body.sex,
          body.birth_date,
          moment.now
        ],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  delete_user: (sql, body) => {
    return new Promise((resolve, reject) => {
      sql.query(
        "CALL user_delete(?,?)",
        [body.code_user, moment.now],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  }
};
