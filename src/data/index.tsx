import { useMutation } from '@tanstack/react-query'

export {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
  UseQueryOptions,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'

export type MutationReturn = ReturnType<typeof useMutation>
