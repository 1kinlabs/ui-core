import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

import CustomAvatar from 'materialize/components/mui/avatar'

import { getInitials } from 'materialize/utils/get-initials'

function UserAvatar({ user }) {
  if (user.image) {
    return (
      <Avatar
        alt="User Image"
        src={user.image}
        variant="rounded"
        sx={{ width: 40, height: 40, borderRadius: '50%' }}
      />
    )
  } if (user.username) {
    return (
      <CustomAvatar
        skin="light"
        variant="rounded"
        color={user.avatarColor}
        sx={{
          width: 40, height: 40, fontWeight: 600, fontSize: '1rem', borderRadius: '50%',
        }}
      >
        {getInitials(user.username)}
      </CustomAvatar>
    )
  }

  return (
    <Avatar
      alt="Anonymous"
      src="/images/avatars/1.png"
      variant="rounded"
      sx={{ width: 40, height: 40 }}
    />
  )
}

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}))

export default function UserAvatarWithBadge({ user, onClick }) {
  return (
    <Badge
      overlap="circular"
      onClick={onClick}
      sx={onClick ? { ml: 2, cursor: 'pointer' } : null}
      badgeContent={<BadgeContentSpan />}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <UserAvatar user={user} />
    </Badge>
  )
}
