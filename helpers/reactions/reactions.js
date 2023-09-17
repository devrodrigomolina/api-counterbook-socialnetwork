const Reaction = require('../../src/reactions/Reactions');

async function handleExistingReaction(existingReaction, newType) {
    if (existingReaction.type !== newType) {
        await updateReactionType(existingReaction, newType);
    } else {
        await deleteReaction(existingReaction);
    }
}

async function updateReactionType(reaction, newType) {
    reaction.type = newType;
    await reaction.save();
}

async function deleteReaction(reaction) {
    await reaction.destroy();
}

async function createNewReaction(type, postId, userId) {
    await Reaction.create({
        type,
        post_id: postId,
        user_id: userId
    });
}

module.exports = {
    handleExistingReaction,
    updateReactionType,
    deleteReaction,
    createNewReaction
}