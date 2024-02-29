import { useMutation } from '@tanstack/react-query'

export {
  useQuery,
  useMutation,
  useQueryClient,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'

export type MutationReturn = ReturnType<typeof useMutation>
