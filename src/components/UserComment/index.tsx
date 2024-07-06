import s from './UserComment.module.scss';
import React from "react";
import { UserCommentInterface } from "../../types/userComment.interface";

export const UserComment: React.FC<UserCommentInterface> = ({img, name, user_name, comment}) => {
	return (
		<div className={s.user}>
			<div className={s.user_inf}>
				<img src={img} alt="User's Image" />
				<div>
					<h3 className={s.name}>{name}</h3>
					<p className={s.user_name}>{user_name}</p>
				</div>
			</div>
			<p className={s.user_comment}>
				{comment}
			</p>
		</div>
	)
}