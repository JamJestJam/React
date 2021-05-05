//data
import IEnComment from "Entities/comment";
import IEnPhoto from "Entities/photo";
import IEnPost from "Entities/post";
import IEnUser from "Entities/user";

export default function CombineData(
    users: IEnUser[],
    posts: IEnPost[],
    comments: IEnComment[],
    photos: IEnPhoto[]
): [IEnUser[], IEnPost[], IEnComment[], IEnPhoto[]] {
    for(let i=0;i<posts.length;i++){
        const post = posts[i];
        post.owner = users.find(a=>a.id === post.userId);
        post.comment = comments.filter(a=>a.postId === post.id);
        post.photo = photos.find(a=>a.id === post.id);
    }

    for(let i=0;i<users.length;i++){
        const user = users[i];
        user.posts = posts.filter(a=>a.userId === user.id);
        user.photo = photos.find(a=>a.id === user.id);
    }

    for(let i=0;i<comments.length;i++){
        const comment = comments[i];
        comment.post = posts.find(a=>a.id === comment.postId);
    }

    return [users, posts, comments, photos];
}
