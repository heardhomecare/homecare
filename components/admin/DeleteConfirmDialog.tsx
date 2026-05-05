'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Loader2 } from "lucide-react"

interface DeleteConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
  description?: string
  isLoading?: boolean
}

export default function DeleteConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  description = "This action cannot be undone. This will permanently delete the item and remove it from our servers.",
  isLoading = false,
}: DeleteConfirmDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="rounded-3xl border-gray-100 shadow-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-serif text-gray-900">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-500 mt-2">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-3 mt-6">
          <AlertDialogCancel 
            disabled={isLoading}
            className="rounded-full px-6 py-2.5 font-bold text-xs uppercase tracking-widest border-gray-200 hover:bg-gray-50 transition-all active:scale-95"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault()
              onConfirm()
            }}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-2.5 font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-red-200 active:scale-95 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete Item"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
