import { FastifyInstance, FastifyRequest } from 'fastify';
import { getUser, signIn, signUp, deleteUser, updateUser } from '../api/users';
import { Bookmark } from '../models/bookmark';
import { User } from '../models/users';

async function routes(fastify: FastifyInstance) {
  // Get a single user
  fastify.get<{ Params: { _id: string } }>('/:_id', async (req, res) => {
    const result = await getUser(req.params._id);
    res.status(200).send(result);
  });

  // Sign in a user
  fastify.post('/signin', async (req, res) => {
    const result = await signIn(req.body);
    res.status(201).send(result);
  });

  // Sign up a new user
  fastify.post('/signup', async (req, res) => {
    const result = await signUp(req.body);
    res.status(201).send(result);
  });

  // Update a user's info
  fastify.put('/:_id', async (req: FastifyRequest<{
    Params: { _id: string },
    Body: {
      email?: string,
      password?: string,
      bookmarks?: Array<Bookmark>
    }
  }>, res) => {
    const { _id } = req.params;
    const {
      email,
      password,
      bookmarks
    } = req.body;

    const result = await updateUser(_id, req.body);
    res.status(201).send(result);
  });

  // Delete a user
  fastify.delete('/:_id', async (req: FastifyRequest<{ Params: { _id: string } }>,
    res
  ) => {
    const { _id } = req.params;

    const result = await deleteUser(_id);
    res.code(200).send(result);
  })
}

export default routes;