import { CounterInterface } from '../../types/counter.interface';
import { UserCommentInterface } from '../../types/userComment.interface';
import { Counter } from '../Counter';
import { OSComponent } from '../OSComponent';
import { UserComment } from '../UserComment';
import s from './Main.module.scss'
import React from "react";

export const Main: React.FC = () => {
	const counters: Array<CounterInterface> = [
		{val: 20, type: 'K+', time: 96, descr: 'subscribers'},
		{val: 19, type: '.5K', time: 148, descr: 'successful cases'},
		{val: 4, type: '.8/5', time: 230, descr: 'rating'}
	]

	const usersComments: Array<UserCommentInterface> = [
		{ id: 36842, img: '/images/comments/lorenzo.png', name: 'Lorenzo', user_name: '@lorenzo', comment: 'Amazing Telegram bot! Provides real-time crypto prices and news' },
		{ id: 27850, img: '/images/comments/adalina.png', name: 'Adalina', user_name: '@ada', comment: 'Must-have bot for crypto traders. Accurate signals and analysis' },
		{ id: 10682, img: '/images/comments/alexander.png', name: 'Alexander', user_name: '@alex_x', comment: 'Superb cryptocurrency bot! Quick updates and reliable data' },
		{ id: 67392, img: '/images/comments/rushana.png', name: 'Rushana', user_name: '@Hana', comment: 'Efficient and user-friendly bot. Simplifies crypto trading tasks' },
	]

	return (
		<section>
			<div className={s.main}>
				<h1 className={s.main__title}>
					Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span>
				</h1>
				<p className={s.subscribe}>Subscribe to our channel to learn more</p>
			</div>
			<div className={s.counters}>
				{counters.map(d => <Counter {...d} />)}
			</div>
			<button className={s.btn}>Join Whatsapp</button>
			<div className={s.os_wrapper}>
				<OSComponent type={'android'} />
				<OSComponent type={'ios'} />
			</div>
			<div className={s.comments}>
				{usersComments.map(d => <UserComment {...d} />)}
			</div>
			<div className={s.cryptocurrencies}>
				<img src="/images/cryptocurrency/Bitcoin.svg" alt="Bitcoim Image" />
				<img src="/images/cryptocurrency/Litecoin.svg" alt="Litecoin Image" />
				<img src="/images/cryptocurrency/Ethereum.svg" alt="Ethereum Image" />
			</div>
		</section>
	)
}