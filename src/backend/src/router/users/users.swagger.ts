/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login to the application
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: 'testEmail@email.com'
 *               password:
 *                 type: string
 *                 example: '123456'
 *     responses:
 *       '200':
 *          description: Successful login
 *          content:
 *              application/json:
 *                  example:
 *                      token: 'your-generated-token'
 *       '401':
 *          description: Unauthorized
 *          content:
 *              application/json:
 *                  example:
 *                      error:
 *                          mensagem: 'User not found or Incorrect Email or Password'
 */