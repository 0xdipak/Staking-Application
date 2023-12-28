import StakedAmount from './StakedAmount'
import RewardRate from './RewardRate'
import EarnedReward from './EarnedReward'

const Card = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-6 rounded-2xl'>
        <StakedAmount />
        <RewardRate />
        <EarnedReward />
    </div>
  )
}

export default Card