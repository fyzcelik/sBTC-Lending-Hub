(define-fungible-token stx-token)

(define-map loans
  ((borrower principal))
  ((amount uint))
)

(define-constant ERR_NOT_ENOUGH_COLLATERAL (err u100))
(define-constant MIN_COLLATERAL u1000000) ;; 1 STX

(define-public (borrow (amount uint))
  (begin
    ;; Require a small fixed collateral for demo
    (asserts! (>= (stx-get-balance tx-sender) MIN_COLLATERAL) ERR_NOT_ENOUGH_COLLATERAL)
    (map-set loans
      ((borrower tx-sender))
      ((amount amount))
    )
    (ok (ft-mint? stx-token amount tx-sender))
  )
)

(define-read-only (get-loan (user principal))
  (default-to {amount: u0}
    (map-get? loans ((borrower user)))
  )
)