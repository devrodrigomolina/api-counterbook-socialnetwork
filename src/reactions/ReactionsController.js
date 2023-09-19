const express = require('express');
const router = express.Router();
const Reaction = require('./Reactions')
const { handleExistingReaction, createNewReaction } = require('../helpers/reactions/reactions')

router.post('/reactions/new', async (req, res) => {
    const { type, postId, userId } = req.body;

    try {
        const existingReaction = await Reaction.findOne({
            where: {
                post_id: postId,
                user_id: userId
            }
        });

        if (existingReaction) {
            await handleExistingReaction(existingReaction, type);
            res.send({ message: "Reação atualizada com sucesso" });
        } else {
            await createNewReaction(type, postId, userId);
            res.send({ message: "Reação criada com sucesso" });
        }

    } catch (error) {
        res.status(500).send({ message: `Ocorreu um erro: ${error.message}` });
    }
});

module.exports = router;
